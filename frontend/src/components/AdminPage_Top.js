// import React, {Component} from "react";
// import Customer from "./Customer";
// import {Table, TableBody, TableCell, TableRow, TableHead, withStyles} from "@material-ui/core";

// const styles = theme => ({
//     root: {
//         width: "100%",
//         marginTop: theme.spacing.unit * 3,
//         overflowX: "scroll"
//     },
//     table: {
//         minWidth: 1080
//     }
// });

// // customer 배열
// const customerArray = [
//     {
//         'profileImage': 'https://placeimg.com/150/150/1',
//         'userName': '서시대생서명교',
//         'OTTName': 'NETFLIX',
//         'groupID': 1,
//         'userID': 'devouring123',
//         'userPassword': 'asdf1234',
//         'realName': '서명교',
//         'registrationNumber': '9808231234567',
//         'phoneNum': '01077434495',
//         'mailAddress': 'devouring123@gmail.com',
//         'sex': 'Male',
//         'job': 'Student',
//     },
//     {
//         'profileImage': 'https://placeimg.com/150/150/2',
//         'userName': '사실김윤호',
//         'OTTName': 'WATCHA',
//         'groupID': 2,
//         'userID': 'rladbsgh123',
//         'userPassword': 'zxcv1234',
//         'realName': '서명교',
//         'registrationNumber': '9801011234567',
//         'phoneNum': '01012345678',
//         'mailAddress': 'rladbsgh123@gmail.com',
//         'sex': 'Female',
//         'job': 'SalaryMan',
//     },
//     {
//         'profileImage': 'https://placeimg.com/150/150/3',
//         'userName': '임유성123',
//         'OTTName': 'WAVVE',
//         'groupID': 3,
//         'userID': 'dbtjd112233',
//         'userPassword': 'qwer1234',
//         'realName': '서명교',
//         'registrationNumber': '9812311234567',
//         'phoneNum': '01087654321',
//         'mailAddress': 'dbtjd112233@gmail.com',
//         'sex': 'Male',
//         'job': 'None',
//     }
// ]

// class AdminPage_Top extends Component {
//     render() {
//         return (
//             <div>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>프로필사진</TableCell>
//                             <TableCell>닉네임</TableCell>
//                             <TableCell>OTT 이름</TableCell>
//                             <TableCell>그룹 ID</TableCell>

//                             <TableCell>아이디</TableCell>
//                             <TableCell>비밀번호</TableCell>
//                             <TableCell>실명</TableCell>
//                             <TableCell>전화번호</TableCell>

//                             <TableCell>주민번호</TableCell>
//                             <TableCell>메일주소</TableCell>
//                             <TableCell>성별</TableCell>
//                             <TableCell>직업</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {customerArray.map(c => {
//                             return <Customer key={c.id} profileImage={c.profileImage}
//                                              userName={c.userName} OTTName={c.OTTName}
//                                              groupID={c.groupID} userID={c.userID}
//                                              userPassword={c.userPassword} realName={c.realName}
//                                              phoneNum={c.phoneNum}
//                                              registrationNumber={c.registrationNumber}
//                                              mailAddress={c.mailAddress} sex={c.sex}
//                                              job={c.job}
//                             />
//                         })}
//                     </TableBody>
//                 </Table>
//             </div>
//         );
//     }
// }

// export default withStyles(styles)(AdminPage_Top);
