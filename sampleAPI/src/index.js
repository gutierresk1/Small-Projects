import React from 'react'; 
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail avatar={faker.image.image()} author="Sam" timeAgo="Today at 4:45PM" userText="Nice blog post!"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail avatar={faker.image.image()} author="Alex" timeAgo="Today at 2:00AM" userText="Great!"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail avatar={faker.image.image()} author="Jane" timeAgo="Yesterday at 5:00PM" userText="Awesome."/>
        </ApprovalCard>
        </div>
    ); 
};

ReactDOM.render(<App />, document.querySelector('#root'));