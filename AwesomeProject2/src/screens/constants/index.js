export const initializing = 'AwesomeProject.initializing';

export const screens = {
    [initializing]: () => require('../Auth/screen/initializing').default,
};

