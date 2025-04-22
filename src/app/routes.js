const paths = {
    LOGIN_PATH : '/login',
    HOME_PATH  : '/home',
    SALES_PATH : '/sales'
}
const routes = {
    LOGIN : { path : paths.LOGIN_PATH, replacementPath : paths.HOME_PATH  },
    HOME  : { path : paths.HOME_PATH,  replacementPath : paths.LOGIN_PATH },
    SALES : { path : paths.SALES_PATH, replacementPath : paths.LOGIN_PATH },
};

export {
    paths,
    routes
};