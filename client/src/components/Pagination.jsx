import React, { useEffect } from 'react';
import {Pagination, PaginationItem} from '@material-ui/lab';
import {Link} from 'react-router-dom'
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';

import {getPosts} from '../actions/post';


export const Paginate = ({page}) => {
    const dispatch = useDispatch();
    
    const {numberOfPages} = useSelector(state => state.posts)

    useEffect(() => {
        if(page)
        dispatch(getPosts(page));
    }, [page])

    const classes= useStyles();

    return (
        <Pagination 
        classes={{ul: classes.ul}}
        count={numberOfPages}
        page={Number(page) || 1}
        
        variant="outlined"
        renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
        )}
        />
            
        
    )
}
