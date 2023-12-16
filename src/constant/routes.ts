const UnauthenticatedRoutePath = {
    Login: () => '/login',
    Register: () => '/register',
    Home: () => '/',
    PP:() => '/privacypolicy',
    Navigate: () => '*'
}

const AuthenticatedRoutePath = {
    Profile: () => '/profile',
    Task: () => "/tasks",
    Navigate: () => '*'
}

export {UnauthenticatedRoutePath, AuthenticatedRoutePath}