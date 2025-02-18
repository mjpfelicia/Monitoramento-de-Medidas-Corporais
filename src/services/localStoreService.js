export const salvarDados = (chave, dados) => {
    try {
        localStorage.setItem(chave, JSON.stringify(dados));
        return true;
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        throw error;
    }
};

export const obterDados = (chave) => {
    try {
        const item = localStorage.getItem(chave);
        const dados = item ? JSON.parse(item) : null;
        return dados;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        throw error;
    }
};

export const removerDados = (chave) => {
    try {
        localStorage.removeItem(chave);
        return true;
    } catch (error) {
        console.error('Erro ao remover dados:', error);
        throw error;
    }
};