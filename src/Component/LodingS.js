import React from 'react';
import Skeleton from 'react-loading-skeleton';
import CommentSection from './CommentSection';
import $ from 'jquery';
import './style.css';

class Load extends React.Component {
    componentDidMount() {
        $(function () {
            $(".button").on("click", function () {
                $("#listings-container").find("li:hidden:lt(10)").show();
            });
        });
    }
    render() {
        return (
            <>
                <CommentSection />
            </>
        )
    }
}

export default Load;