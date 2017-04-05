
//Array functions
{
    let arr = ['a', 'b', 'c'];

    console.log( arr.filter( e => e !== 'a' ) );
    console.log( arr.reduce( (e, n) => e+n ) );

    //agrega un elemento pero no modifica el arreglo, retorna uno nuevo
    console.log( arr.concat(['d']) );

    //esto hace lo mismo pero modifica el arreglo original
    arr.splice( arr.length, 0, 'd' )
    console.log(arr);

}

//Destructuring
{
    const arrObj = { b: 1, c: { foo: 1, bar: 'hola' } }
    const {c} = arrObj // tomo solo 'c' del array
    console.log(c);
}

//Block scopes es6, replazo de iffes
//console.log(c); //c aca esta fuera de los block scopes { }, error: c "not defined"


//Clases
{
    class Mamifero{
        constructor(reino){
            this.estado = 'vivo'
            this.reino = reino
        }

        respirar(){
            console.log( 'estoy respirando' );;
        }
    }



    class Perro extends Mamifero{
        constructor(props){
            super(props)
        }

    }

    const perrito = new Perro('animal')
    perrito.respirar()
    console.log(perrito.reino);
}

//Template strings
{
    const datos = ['juan', 'deporte']
    const str = `mi nombre es ${datos[0]}   y me gusta el ${datos[1]}`
    console.log(str);

}

//Promises
{


    const upperString = (string) => {
        return new Promise( (resolve,reject) => {
            if (typeof string !== 'string') {
                reject(new Error('no es de tipo string'))
            }
            setTimeout(()=>{
                resolve(string.toUpperCase())
            }, 2000)
        })
    }

    const addGenial = (string)=> {
        return new Promise( (resolve, reject) => {
            console.log("**Promises**");
            resolve(string.concat(' es genial!'))
        })
    }

    upperString('juan')
        .then( result => addGenial(result) )
        .then( result => console.log(result) )
        .catch( error => console.log(error.message) )

}

// Fetch data and Promises
{
    // console.log('**Fetch**');
    //
    // var request = new Request('http://swapi.co/api/people/', {
    // 	headers: new Headers({
    // 		'Content-Type': 'text/plain'
    // 	})
    // });
    //
    // fetch(request).then( result => {
    //     console.log(result);
    //     return result.json()
    // })
    // .then( result => console.log(result) )


    const opt = {
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }

    const pokeInfo = (poke, opt) => {
        const pokeProm = fetch(`http://pokeapi.co/api/v2/pokemon/${poke}/`, opt)
        //const pokeJson = pokeProm.then( data => data.toJson() )
        pokeProm.then( result => result.json() )
                .then( json => console.log(json.name) )

    }


    pokeInfo('1', opt)
}
