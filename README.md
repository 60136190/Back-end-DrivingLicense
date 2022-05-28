
- This is Driving License Application
# Driving License for admin
Traffic sign:
- Add traffic sign: POST --> https://driving-license-thainam.herokuapp.com/trafficSign/add

Category of traffic sign:
- Add category of traffic sign: POST --> https://driving-license-thainam.herokuapp.com/categorySign/add

# Driving License for customer
Traffic sign:
- Get all traffic sign: GET --> https://driving-license-thainam.herokuapp.com/trafficSign/getAll
- Get detail traffic sign: GET --> https://driving-license-thainam.herokuapp.com/trafficSign/getDetail/{id}
- Get all traffic sign follow id category: GET --> https://driving-license-thainam.herokuapp.com/trafficSign/getTrafficSignFollowIdCategory/{id}

Category of traffic sign:
- Gett all category: GET --> https://driving-license-thainam.herokuapp.com/categorySign/getAll

Auth:
- Register: POST --> https://driving-license-thainam.herokuapp.com/user/register
- Login: POST --> https://driving-license-thainam.herokuapp.com/user/login
- Get profile: GET --> https://driving-license-thainam.herokuapp.com/user/getProfile/{id}
- Update profile: PATCH --> https://driving-license-thainam.herokuapp.com/user/updateUser/{id}
- Change password: PATCH --> https://driving-license-thainam.herokuapp.com/user/changePassword/{id}

