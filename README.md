
# Api For Driving License App
# Admin
Traffic sign:
- Add traffic sign: POST --> https://driving-license-thainam.herokuapp.com/trafficSign/add

Category of traffic sign:
- Add category of traffic sign: POST --> https://driving-license-thainam.herokuapp.com/categorySign/add

Learn
- Update learn: PATCH --> https://driving-license-thainam.herokuapp.com/learn/updateLearn/{id_learn}

Trick
- Create trick: POST --> https://driving-license-thainam.herokuapp.com/trick/add

# Customer
Traffic sign:
- Get all traffic sign: GET --> https://driving-license-thainam.herokuapp.com/trafficSign/getAll
- Get detail traffic sign: GET --> https://driving-license-thainam.herokuapp.com/trafficSign/getDetail/{id}
- Get all traffic sign follow id category: GET --> https://driving-license-thainam.herokuapp.com/trafficSign/getTrafficSignFollowIdCategory/{id}

Category of traffic sign:
- Gett all category: GET --> https://driving-license-thainam.herokuapp.com/categorySign/getAll

Learn:
- Gett all learn: GET --> https://driving-license-thainam.herokuapp.com/learn/getAll
- Get detail learn: GET --> https://driving-license-thainam.herokuapp.com/learn/getDetail/{id}
- Get all learn follow id category: GET --> https://driving-license-thainam.herokuapp.com/learn/getLearnFollowIdCategory/{id}

Category of learn:
- Get all category: GET --> https://driving-license-thainam.herokuapp.com/categoryLearn/getAll

Trick:
- Get all trick: GET --> https://driving-license-thainam.herokuapp.com/trick/getAll
- Get detail trick: GET --> https://driving-license-thainam.herokuapp.com/trick/getDetail/{id}

Auth:
- Register: POST --> https://driving-license-thainam.herokuapp.com/user/register
- Login: POST --> https://driving-license-thainam.herokuapp.com/user/login
- Get profile: GET --> https://driving-license-thainam.herokuapp.com/user/getProfile/{id}
- Update profile: PATCH --> https://driving-license-thainam.herokuapp.com/user/updateUser/{id}
- Change password: PATCH --> https://driving-license-thainam.herokuapp.com/user/changePassword/{id}

