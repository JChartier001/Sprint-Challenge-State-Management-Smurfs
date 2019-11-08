1. What problem does the context API help solve?

    Context API helps share the data that is needed in the application by having it global.  It solves the issue of having to pass props from parent to child to child to child to get to the component that needs it.  Instead, the component that needs it is able to reach right to the data through the API

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions- will describe what is going to happen when they are called.  Reducers will change the state when the action is called.  Store is where the state is held.  It is known as the single source of truth because the only way to change it is by calling an action and a reducer changing the state.  The state is held in one place. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state would be like using Redux and having a global storage.  Component state would have state in the component.  It would be good to use Application state over component state when you are needing to pass data to a component that is lower in the tree.  Instead of passing props through components that don't need it.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk allows asynchronous actions to run at the same time.  IT changes the action-creators by performing async API calls


1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux.  I am not really sure why.  I think because I can understand it's use.  I understand how to use it.  Context API isn't much different, but Redux just makes more sense to me. 
