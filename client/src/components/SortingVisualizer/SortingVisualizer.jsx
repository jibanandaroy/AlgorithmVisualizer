import React, { useState } from "react"
import './SortingVisualizer.css'


const NumberOfArrayBar = 35;


//--------------------------------------- use case function ------------------------//

let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let createNewArray = (array, setArray) => {
    let a = [];

    for (let i = 0; i < NumberOfArrayBar; i++) {
        a.push(randomIntFromInterval(5, 700));
    }
    setArray(a);
}
// ------------------------------------------- end use case function --------------------//
function SortingVisualizer(props) {
    const animationSpeed = props.animationSpeed * 10;
    const [array, setArray] = useState([]);
    const [clickCount, setClickCount] = useState(1);

    ///------------------------------------------  Implement algorithm  -------------------//
    async function bubbleSort() {
        const element = document.getElementsByClassName('array-bar');

        for (let i = 0; i < element.length; i++) {
            for (let j = 0; j < element.length - i - 1; j++) {

                element[j].style.backgroundColor = 'red';
                element[j + 1].style.backgroundColor = 'red';
                let val = parseInt(element[j].style.height);
                let val1 = parseInt(element[j + 1].style.height);

                if (val > val1) {
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, animationSpeed)
                    );

                    // swaping -->

                    let tamp = element[j].style.height;
                    element[j].style.height = element[j + 1].style.height;
                    element[j + 1].style.height = tamp;


                }
                element[j].style.backgroundColor = 'cyan';
                element[j + 1].style.backgroundColor = 'cyan';

            }
            element[element.length - i - 1].style.backgroundColor = 'green';


        }

    }


    async function selection() {
        const element = document.getElementsByClassName('array-bar');
        for (let i = 0; i < element.length; i++) {
            let min = i;
            element[i].style.backgroundColor = 'blue';
            for (let j = i + 1; j < element.length; j++) {
                element[j].style.backgroundColor = 'red';

                await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));
                let val = parseInt(element[j].style.height);
                let val1 = parseInt(element[min].style.height);
                if (val < val1) {
                     
                     if (min !== i) {
  
                        element[min].style.backgroundColor = 'cyan';
                      }
                      min = j;
                }else

                element[j].style.backgroundColor = 'cyan';
            
            }
            if (min !== i) {
                let tamp = element[i].style.height;
                element[i].style.height = element[min].style.height;
                element[min].style.height = tamp;
            }
            await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed ));

            element[min].style.backgroundColor ='cyan';
            element[i].style.backgroundColor = 'green';
        }

    }





    async function merge(element , first , mid , last)
    {

        const n1 = mid -first +1 ;
        const n2 = last - mid ;
        let left = new Array(n1);
        let right = new Array(n2);

        // left half --> 
        for(let i = 0 ;i< n1 ;i++)
        {
            await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));
            element[first + i].style.backgroundColor = 'orange';
            left[i] = element[first + i].style.height ;
        }

        //right  left  --> 
        for(let i = 0 ;i<n2 ;i++)
        {
            await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));
            element[mid +i +1].style.backgroundColor = 'yellow' ;
            right[i] = element[mid +i +1].style.height ;
        }

        await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));
        let i = 0 ,j = 0 ,k = first ;
        while(i<n1 && j < n2)
        {
            await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));
            if(parseInt(left[i]) <= parseInt(right[j]))
            {
                if((n1 + n2) === element.length )
                {
                    element[k].style.backgroundColor = 'green';
                }
                else 
                {
                    element[k].style.backgroundColor = 'lightgreen' ;
                }
                element[k].style.height = left[i] ;
                i++ ;
                k++;
            }
            else 
            {
                if((n1 + n2) === element.length)
                {
                    element[k].style.backgroundColor = 'green';
                }else 
                {
                    element[k].style.backgroundColor = 'lightgreen' ;
                }
                element[k].style.height = right[j];
                j++ ;
                k++ ;
            }
        }

     // last  part ---> 
        while( i < n1)
        {
            await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));

            if((n1 + n2) === element.length )
            {
                element[k].style.backgroundColor = 'green';
            }
            else 
            {
                element[k].style.backgroundColor = 'lightgreen' ;
            }
            element[k].style.height = left[i] ;
            i++ ;
            k++;

        }

        while(j < n2 )
        {
            await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));

            if(n1 + n2 === element.length)
            {
                element[k].style.backgroundColor = 'green';
            }else 
            {
                element[k].style.backgroundColor = 'lightgreen' ;
            }
            element[k].style.height = right[j];
            j++ ;
            k++ ;

        }


    }
    async function margeSort(element , first , last)
    {
        if(first >= last) return ;
        const mid = first  + Math.floor((last - first) / 2);

       await margeSort(element, first, mid);
       await margeSort(element, mid + 1, last);
       await merge(element, first, mid, last);

    }
   
    //--------------------------end algorithm ----------------------------------//

    //----------------------------- call to sizebar  -------------------------//

     async function bubble()
     {
        console.log('sorting')
         await bubbleSort();
         console.log('done');
     }

    if (props.clickCount === clickCount) {

        switch (props.clickEvent) {
            case "newArray":
                {
                    createNewArray(array, setArray);
                    setClickCount(prev => prev + 1);
                    break;
                }
            case "marge":
                {
                    const element = document.getElementsByClassName('array-bar');
                    margeSort(element , 0 , parseInt(element.length) -1);
                    break;
                }
            case "bubble":
                {

                    bubble();
                    break;
                }
            case "selection":
                {
                    selection();
                    break;
                }
            default:
                console.log(childClickEvent);
        }
    }

    //-------------------------------------------------------------------------------//
    return (
        <>
            <div className="responsive">
                <div className="array-container">
                    {array.map((value, index) =>
                    (
                        <div
                            className="array-bar"
                            key={index}
                            style={{ height: `${value}px` }}>
                        </div>

                    ))}


                </div>
            </div>
        </>
    )

}

export default SortingVisualizer;


