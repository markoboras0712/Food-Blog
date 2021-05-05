export default function(context){
    console.log('Storing token middleware');
    if(process.client){
        context.store.dispatch("initAuth");
    }
}