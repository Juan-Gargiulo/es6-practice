{
    let arr = ['a', 'b', 'c'];

    //prueba array functions
    console.log( arr.filter( (e)=> e !== 'a' ) );
    console.log( arr.reduce( (e, n)=> e+n ) );

    //agrega un elemento pero no modifica el arreglo
    console.log( arr.concat(['d']) );

    //esto hace lo mismo pero modifica el arreglo original
    arr.splice( arr.length, 0, 'd' );
    console.log(arr);

}

//destructuring
{
    const arrObj = { b: 1, c: { foo: 1, bar: 'hola' } }
    const {c} = arrObj // tomo solo 'c' del array
    console.log(c);
}

//block scopes es6, replazo de iffes
console.log(c); //c aca esta fuera de los block scopes { } = "not defined"
