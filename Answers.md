1. What problem does the context API help solve?

      - Context API can help keep your state clean by using global data, instead of passing data from top-down via props. With Context API, you don't have to share values through every level of the tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

      - actions - In order to modify the state of the store object, you need to dispatch actions to              alter the store's state. Actions contain a type and sometimes a payload property.

      - reducers - Actions are dispatched to the reducer function. A reducer will update the store's              state according to the type and possible payload of the action passed to the                   reducer.

      - store - This object is where all the state of the application is stored. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

      - Application state is immutable and can only change via dispatching actions. With component state, you have to plan ahead to determine which components will or won't hold state. If the application is large, it is best to go with Application state over component state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

      - Redux-thunk allows you to is a package that acts as middleware for Redux. The purpose of redux-thunk is to be able to perform asynchronous requests. This can come in handy when making API calls from our action creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

      - I love Redux. I really grasped the concepts fairly quickly. I like the idea of a global store for containing the application's state. 