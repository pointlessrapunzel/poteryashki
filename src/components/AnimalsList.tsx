import Link from "next/link";
import React from "react";          
import AnimalCard from "./AnimalCard";
const AnimalsList =  ({array}:{array:{id:number,name:string,gender:string,age:string,image:string}[]}) =>
{
    return(
    <>
        {array.map((a) =>(<li key={a.id}>
                            <Link href={`/animals/${a.id}`}>
                              <AnimalCard animal={a} />
                            </Link>
                          </li>)
        )}
    </>
    )
}                              
export default AnimalsList;