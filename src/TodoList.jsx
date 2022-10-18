import React, { useState } from 'react';

const TodoList = () => {
    const [taches, setTaches] = useState(['Javascript','Node JS', 'C#'])
    const [description, setDescription] = useState('')


    const addTache = () => {
        if(taches.filter(it => it === description).length>0){
            alert('Tache existe deja..');
            return;
        }
        setTaches(taches => [...taches, description])
    }

    const RemoveTache = (des) => {
        if(window.confirm("Voulez vous suppimer cette tache ?"))
            setTaches(taches => taches.filter(item => item !== des))
    }

    return (
        <div>
            <div>
                <input type="text" name="description" id="description" placeholder='add task...' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button onClick={addTache}>Add</button>
            </div>        


            {taches.map((tache,index) => <div key={index} className='tache'> 
                <h3>{tache}</h3>
                <button onClick={() => RemoveTache(tache)}>Remove</button>
            </div> )}

            <button onClick={() => setTaches([])}>Clear All</button>
        </div>
    );
}

export default TodoList;
