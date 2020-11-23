import axios from 'axios';


export const allClass = axios.get(`/dashboard/class/all`, {headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
        console.log(res.data);
        this.setState({
            items: res.data,
            isLoaded: true,
            redirectToReferrer: false
        })
    })



    export const getClassAll = (id) => async (dispatch, getState) => {
        try {
          dispatch({
            type: USER_DETAILS_REQUEST,
          })
      
          const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
      
          const { data } = await axios.get(`/dashboard/class/all`, config)
      
          dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
          })
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          if (message === 'Not authorized, token failed') {
            dispatch(logout())
          }
          dispatch({
            type: USER_DETAILS_FAIL,
            payload: message,
          })
        }
      }