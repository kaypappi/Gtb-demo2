const InitState = {
  users: [
    { id: '1', user_id: '3333', email: 'foo@example.com', password: 'password' }
  ],

  Reservation: [
    { id: '1', reg_id: '1', cname: 'Team Ferrari', address: '12 Driveby street, Area, City, State.', email: 'foo@example.com', cphone: '08039003900' }
  ],

  company: [
    { id: '1', reg_id: '1', ref_no: 22334, business: 'Active', address: '12 Driveby street, Area, City, State.', email: 'foo@example.com' }
  ],

  proprietors: [
    {
      id: '1', reg_id: '1', c_id: '1', surname: 'ukadike', firstname: 'wesley', othernames: 'random',
      address: 'highrise', phone: 456789654356, email: 'wes@gmaol.com', Mid: 'studentid', id_card: 'fghh', photo: 'https://res.cloudinary.com/kaypappi/image/upload/v1540861996/kaypappi/bwl62xmbtrbwed8zms8v.jpg', bvn: '3456754'
    }
  ]

}


const rootReducer = (state = InitState, action) => {
  console.log(action)
  if (action.type === 'CREATE_USER') {
    let user_id = Math.floor(Math.random() * 10000).toString();
    let newUser = { id: action.id.toString(), user_id: user_id, email: action.email, password: action.password }
    console.log(...state.users,
      newUser)
    return {
      ...state,
      users: [
        ...state.users,
        newUser
      ]
    }
  }


  if (action.type === 'CREATE_RESERVATION') {

    let newReserve = { id: action.id.toString(), reg_id: action.reg_id.toString(), cname: action.cname, address: action.address, email: action.email, cphone: action.phone }
    return {
      ...state,
      Reservation: [
        ...state.Reservation, newReserve
      ]
    }
  }

  if (action.type === 'CREATE_COMPANY') {
    let newComapany = { id: action.id, reg_id: action.reg_id, ref_no: action.ref_no, business: action.business, address: action.address, email: action.email }
    return {
      ...state,
      company: [
        ...state.company, newComapany
      ]
    }
  }

  if (action.type === 'ADDPROP') {
    let newProp = {
      id: action.id, reg_id: action.reg_id, c_id: action.c_id, surname: action.surname,
      firstname: action.firstname, othernames: action.othernames, address: action.address, phone: action.phone,
      email: action.email, Mid: action.Mid, id_card: action.id_card, photo: action.photo, bvn: action.bvn
    }

    return {
      ...state,
      proprietors: [
        ...state.proprietors, newProp
      ]
    }
  }

  return state;
}

export default rootReducer