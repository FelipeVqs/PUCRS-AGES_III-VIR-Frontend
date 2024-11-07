import './progress.css';

function WithLabelExample() {
    const totalPages = 100; // Total de páginas no livro
    const currentPage = 46; // Página atual lida

    const progress = (currentPage / totalPages) * 100; // Progresso em porcentagem
    const remainingPages = totalPages - currentPage; // Páginas restantes

    return (
        <div>
            {/* Barra de progresso com texto ao lado */}
            <div className='progress-container'>
                <div className='progress-bar'>
                    <div
                        className='progress-read'
                        style={{
                            width: `${progress}%`, // Progresso com base no percentual
                        }}
                    />
                </div>
                <span className='progress-percentage'>{`${Math.round(progress)}%`}</span>
            </div>

            {/* Texto de páginas lidas e restantes */}
            <div className='progress-text'>
                <span className='pages-read'>{`${currentPage} páginas lidas`}</span>
                <span className='pages-left'>{`faltam ${remainingPages} páginas`}</span>
            </div>
        </div>
    );
}

export default WithLabelExample;
