import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='Bcc card m-4'>
        <div className='text-center m-2'>
        <Pdf targetRef={ref} filename="code-example.pdf">
     {({ toPdf }) => <button className='bg-info text-center' onClick={toPdf}>Generate Pdf</button>}
   </Pdf>
        </div>
   <div ref={ref}>
   <div className='card'>
         <div className='card'>
             <h5>1.In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h5>
         </div>
         <div>
             <h5>
                 2.React PropTypes validators
                 1.PropTypes.any : The prop can be of any data type.
                 2.PropTypes.bool : The prop should be a Boolean.
                 3.PropTypes.number : The prop should be a number.
                 4.PropTypes.string : The prop should be a string.
                 5.PropTypes.func : The prop should be a function.
                 PropTypes.array : The prop should be an array.
             </h5>
         </div>
         <div>
             <h5>
                 3.Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
             </h5>
         </div>
         <div>
             <h5>
                 4.Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
             </h5>
         </div>
     </div>
     </div>
 </div>
    );
};

export default Blog;