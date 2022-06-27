import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { handleTextAction } from '../../redux/actions/actions'

function PostPage() {
    const title = useSelector(state => state.title.title)
    const dispatch = useDispatch()

    const handleTitle = () => {
        dispatch(handleTextAction())
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleTitle}>
                change Text
            </button>
        </div>
    )
}

export default PostPage
