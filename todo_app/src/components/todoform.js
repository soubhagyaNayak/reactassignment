import React from 'react'

const Todoform = ({ handleSubmit, todo, setTodo, editid }) => {
    return (
        <div>
            <form style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center", }} action="" onSubmit={handleSubmit} >
                <input style={{ padding: "12px", fontSize: "15px", width: "35vw" }} type="text" placeholder='type here' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button style={{ padding: "14px", backgroundColor: "navy", color: "white", border: "none", cursor: "pointer" }} >{editid ? <i className="fa fa-pen"></i> : <i className="fa fa-plus"></i>}</button>

            </form>
        </div>
    )
}

export default Todoform
