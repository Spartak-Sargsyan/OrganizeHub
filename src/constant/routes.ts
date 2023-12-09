const UnauthenticatedRoutePath = {
    Login: () => '/login',
    Register: () => '/register',
    Home: () => '/',
    PP:() => '/privacypolicy',
    Navigate: () => '*'
}

const AuthenticatedRoutePath = {
    Profile: () => '/profile',
    Tasks: () => '/tasks',
    AddTasks: () => "/createtasks",
    Navigate: () => '*'
}

export {UnauthenticatedRoutePath, AuthenticatedRoutePath}