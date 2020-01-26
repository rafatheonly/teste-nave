import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = props => {
    return (
        <tr>
            <td className="center-align"><Link to={`/detalhes/${props.id}`}>{props.id}</Link></td>
            <td>{props.name}</td>
            <td>{props.surge}</td>
            <td>{props.date}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default UserItem