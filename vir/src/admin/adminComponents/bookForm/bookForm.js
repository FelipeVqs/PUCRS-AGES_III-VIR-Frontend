import React, { useState, useEffect } from 'react';
import './bookForm.css';

const BookFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        id: '',
        author: '',
        category_name: '',
        chapter_number: '',
        cover: null,
        description: '',
        page_number: '',
        published_at: '',
        title: '',
        total_pages: '',
        contentPdf: null,
        gif_url: [],
    });

    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://virback.totalclan.com.br/categories/');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'gif_url') {
            const newGifs = Array.from(files);
            setFormData((prevData) => ({
                ...prevData,
                gif_url: [...prevData.gif_url, ...newGifs],
            }));
        } else if (name === 'contentPdf') {
            const file = files[0];
            if (file && file.type !== 'application/pdf') {
                alert('Por favor, selecione um arquivo PDF.');
                e.target.value = '';
            } else {
                setErrors((prev) => ({ ...prev, contentPdf: '' }));
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: file,
                }));
            }
        } else if (name === 'cover') {
            const file = files[0];
            if (file && !['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)) {
                alert('Por favor, selecione um arquivo de imagem (PNG, JPG ou JPEG).');
                e.target.value = '';
            } else {
                setErrors((prev) => ({ ...prev, cover: '' }));
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: file,
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files ? files[0] : value,
            }));
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar se todos os campos obrigatórios estão preenchidos
        if (!formData.title || !formData.author || !formData.category_name || !formData.description || !formData.cover) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Criar um objeto FormData para enviar dados (necessário para uploads de arquivos)
        const formDataToSend = new FormData();
        const bookData = {
            author: formData.author,
            category_name: formData.category_name,
            chapter_number: formData.chapter_number,
            cover: formData.cover,
            description: formData.description,
            id: formData.id,
            page_number: formData.page_number,
            published_at: formData.published_at,
            title: formData.title,
            total_pages: formData.total_pages,
        };

        formDataToSend.append('book', JSON.stringify(bookData));

        formDataToSend.append('cover', formData.cover);
        if (formData.contentPdf) {
            formDataToSend.append('contentPdf', formData.contentPdf);
        }
        if (formData.gif_url.length > 0) {
            formData.gif_url.forEach((gif) => {
                formDataToSend.append('gif_url[]', gif);
            });
        }

        try {
            const token = localStorage.getItem('access_token');
            const response = await fetch('https://virback.totalclan.com.br/books/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formDataToSend,
            });

            if (response.ok) {
                alert('Livro enviado com sucesso!');
                setFormData({
                    id: '',
                    author: '',
                    category_name: '',
                    chapter_number: '',
                    cover: null,
                    description: '',
                    page_number: '',
                    published_at: '',
                    title: '',
                    total_pages: '',
                    contentPdf: null,
                    gif_url: [],
                });
                onClose();
            } else {
                const errorResponse = await response.json();
                console.error('Erro ao enviar o livro:', errorResponse);
                alert(`Erro: ${errorResponse.message || 'Erro desconhecido'}`);
            }
        } catch (error) {
            console.error('Erro ao enviar o livro:', error);
            alert('Erro de conexão. Verifique a rede e tente novamente.');
        }
    };

    const borderColor = (field) => {
        if (field === 'title' && formData.title.length > 0) return 'green';
        if (field === 'author' && formData.author.length > 0) return 'green';
        if (field === 'category_name' && formData.category_name) return 'green';
        if (field === 'cover' && formData.cover) return 'green';
        if (field === 'description' && formData.description) return 'green';
        return 'initial';
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className='modal-banner'>
                    
                        <h2 className="title">Adicionar Livro</h2>
                        <button className="close-button" onClick={onClose}>×</button>
                    
                </div>


                <div className="form-scroll-container">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <label>Título:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            style={{ borderColor: borderColor('title') }}
                            placeholder="Título do livro"
                        />
                        <label>Autor:</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            style={{ borderColor: borderColor('author') }}
                            placeholder="Autor do livro"
                        />
                        <label>Categoria:</label>
                        <select
                            name="category_name"
                            value={formData.category_name}
                            onChange={handleChange}
                            required
                            style={{ borderColor: borderColor('category_name'), width: "105%" }}
                        >
                            <option value="">Selecione uma categoria</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        <label>Sinopse:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                            required
                            style={{ borderColor: borderColor('description') }}
                            placeholder="Descrição do livro"
                        ></textarea>

                        <label>Capa do Livro (JPG, PNG ou JPEG):</label>
                        <input
                            type="file"
                            name="cover"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleChange}
                            required
                            style={{ borderColor: borderColor('cover') }}
                        />

                        <label>Conteúdo (PDF):</label>
                        <input
                            type="file"
                            name="contentPdf"
                            accept=".pdf"
                            onChange={handleChange}
                        />

                        <label>Animações (GIFs):</label>
                        <input
                            type="file"
                            name="gif_url"
                            accept=".gif"
                            multiple
                            onChange={handleChange}
                        />
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" onClick={onClose}>Cancelar</button>
                    <button type="submit" onClick={handleSubmit}>Confirmar</button>
                </div>
            </div>
        </div>
    );
};

export default BookFormModal;
