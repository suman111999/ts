//enum->to define a set of named constants
//does not need to eqaua value,if not provided then it consider 1,2 etc.

enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = 'loading',
    loaded = 'loaded',
    error = 'error'
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.loading));

//Literal type->specific string or number value eg.1,'loading' etc.
//it can be used with union and any other type.

type LoadingState1 = 'beforeLoad' | 'loading' | 'loaded' | 'error';

const isLoading1 = (state: LoadingState1) => state === 'loading';

console.log(isLoading1('loading'));