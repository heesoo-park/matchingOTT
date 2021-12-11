// import React from 'react';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// import {withStyles} from "@material-ui/core";

// const styles = theme => ({
//     root: {
//         width: "100%",
//         marginTop: theme.spacing.unit * 3,
//         overflowX: "auto",
//         border: "1px solid blue",
//     },
//     table: {
//         maxWidth: 1500,
//     },
//     tableCell: {
//         border: "1px solid blue",
//     }
// });

// const classes = styles;

// class Customer extends React.Component {
//     render() {
//         return (
//             <TableRow>
//                 <TableCell><img src={this.props.profileImage} alt="프로필 사진"/></TableCell>
//                 <TableCell>{this.props.userName}</TableCell>
//                 <TableCell>{this.props.OTTName}</TableCell>
//                 <TableCell>{this.props.groupID}</TableCell>

//                 <TableCell>{this.props.userID}</TableCell>
//                 <TableCell>{this.props.userPassword}</TableCell>
//                 <TableCell>{this.props.realName}</TableCell>
//                 <TableCell>{this.props.phoneNum}</TableCell>

//                 <TableCell>{this.props.registrationNumber}</TableCell>
//                 <TableCell>{this.props.mailAddress}</TableCell>
//                 <TableCell>{this.props.sex}</TableCell>
//                 <TableCell>{this.props.job}</TableCell>
//             </TableRow>
//         )
//     }
// }

// // 프로필 = 프로필사진, 닉네임, OTT이름, 그룹아이디
// class CustomerProfile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <TableCell className={classes.tableCell}><img src={this.props.profileImage} alt="프로필 사진"/></TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.userName}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.OTTName}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.groupID}</TableCell>
//             </div>
//         )
//     }
// }

// // 프로필 정보 = 아이디, 비밀번호, 실명, 휴대폰 번호, 주민번호, 메일주소, 성별, 직업
// class CustomerInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <TableCell className={classes.tableCell}>{this.props.userID}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.userPassword}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.realName}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.phoneNum}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.registrationNumber}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.mailAddress}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.sex}</TableCell>
//                 <TableCell className={classes.tableCell}>{this.props.job}</TableCell>
//             </div>
//         )
//     }
// }

// export default withStyles(styles)(Customer);
// export {Customer, CustomerProfile, CustomerInfo}
