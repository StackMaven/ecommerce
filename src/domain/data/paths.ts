import pathTypes from '@/domain/types/pathTypes';

const paths: pathTypes[] = [
    {
        name: 'Home',
        pathName: '/'
    },
    {
        name: 'Produtos',
        pathName: '/products'
    },

    {
        name: `Carrinho`,
        pathName: '/cart'
    },
    {
        name: 'Registrar',
        pathName: '/register'
    },
    {
        name: 'Login',
        pathName: '/login'
    }
];

export default paths;
