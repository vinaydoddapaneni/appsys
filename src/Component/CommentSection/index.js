import React, { useEffect, useState } from 'react'
import axios from 'axios';
import $ from 'jquery';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './style.css';

const CommentSection = () => {
    const [list, setList] = useState([])
    const [visable, setVisable] = useState(5)
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const list = await res.json();
            setList(list)
        }, 5000)
    })

    const loadMore = () => {
        setVisable(visable + 5)
    }
    function skeleton() {
        return (
            <>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <p>
                        <Skeleton circle={true} height={50} width={50} />
                        <Skeleton count={1} />
                        <Skeleton count={2} />
                    </p>
                </SkeletonTheme>
                <br />
            </>
        )
    }
    return (
        <>
            {/* Main Body */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-md-6 col-12 pb-4" >
                            <h1>Comments</h1>
                            {list && list.slice(1, visable).map(list => (
                                <div key={list.id} className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt className="rounded-circle" width={40} height={40} />
                                    <h4>{list.title}</h4> <span>- 20 October, 2018</span> <br />
                                    <p>{list.body}</p>
                                </div>)
                            )
                            }
                            {!list.length && (
                                <>
                                    {skeleton()}
                                    {skeleton()}
                                    {skeleton()}
                                    {skeleton()}
                                    {skeleton()}

                                    
                                </>
                            )}
                            {visable < list.length && (
                                <button onClick={loadMore}>More</button>
                            )}
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                            <form id="algin-form">
                                <div className="form-group">
                                    <h4>Leave a comment</h4> <label htmlFor="message">Message</label> <textarea name="msg" id msg cols={30} rows={5} className="form-control" style={{ backgroundColor: 'black' }} defaultValue={""} />
                                </div>
                                <div className="form-group"> <label htmlFor="name">Name</label> <input type="text" name="name" id="fullname" className="form-control" /> </div>
                                <div className="form-group"> <label htmlFor="email">Email</label> <input type="text" name="email" id="email" className="form-control" /> </div>
                                <div className="form-group">
                                    <p className="text-secondary">If you have a <a href="#" className="alert-link">gravatar account</a> your address will be used to display your profile picture.</p>
                                </div>
                                <div className="form-inline"> <input type="checkbox" name="check" id="checkbx" className="mr-1" /> <label htmlFor="subscribe">Subscribe me to the newlettter</label> </div>
                                <div className="form-group"> <button type="button" id="post" className="btn">Post Comment</button> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommentSection
