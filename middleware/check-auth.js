export default function(context){
    console.log('Storing token middleware');
        context.store.dispatch("initAuth",context.req);
    
}