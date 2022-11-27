import React from 'react'

export default function Alert(props) {
    // const capitalize = (word) => {
    //     if (word === "danger"){
    //         word = "error"
    //     }
    //    const lower = word.toLowerCase()
    //    return lower.charAt(0).toUppercase() + lower.slice(1)
    // }
    
  return (
    <div style={{height: '50px' }}>
    { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>
  )
}