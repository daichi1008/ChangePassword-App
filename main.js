
// 現在のパスワードの表示
// aaaaa初期値
// 
const nowPassword = document.getElementById(`nowPassword`);
const newPassword = document.getElementById(`newPassword`);
let Passwordvalue = `aaaaa`;
nowPassword.textContent = `現在のパスワードは${Passwordvalue}`;
console.log(Passwordvalue)

// 変更ボタンの設定
// 練習問題

// const setPassword = document.getElementById(`setPassword`);
// setPassword.addEventListener(`click`, function () {
//     const confirmPassword = document.getElementById(`confirmPassword`).value;
//     const newPassword = document.getElementById(`newPassword`).value;
//     if (Passwordvalue === confirmPassword) {
//         if (Passwordvalue !== newPassword) {
//             if (8 <= newPassword.length) {
//                 Passwordvalue = newPassword;
//                 nowPassword.textContent = `現在のパスワードは${Passwordvalue}`;
//                 alert(`新しいパスワードは${Passwordvalue}です`);
//             } else {
//                 alert(`8文字以上で入力してください。`);
//             }
//         } else {
//             alert(`古いパスワードは使えません！`)
//         }
//     } else {
//         alert(`古いパスワードが間違っています！`);
//     }
// });

// チャレンジ問題１

// const setPassword = document.getElementById(`setPassword`);
// setPassword.addEventListener(`click`, function () {
//     const confirmPassword = document.getElementById(`confirmPassword`).value;
//     const newPassword = document.getElementById(`newPassword`).value;
//     if (Passwordvalue === confirmPassword) {
//         if (Passwordvalue !== newPassword) {
//             let result = newPassword.match(/^\d{3}-\d{4}$/);
//             if (!result) {
//                 alert(`xxx-yyyyの形式で入力してください`)
//             }
//             if (8 <= newPassword.length) {
//                 Passwordvalue = newPassword;
//                 nowPassword.textContent = `現在のパスワードは${Passwordvalue}`;
//                 alert(`新しいパスワードは${Passwordvalue}です`);
//             } else {
//                 alert(`8文字以上で入力してください。`);
//             }
//         } else {
//             alert(`古いパスワードは使えません！`)
//         }
//     } else {
//         alert(`古いパスワードが間違っています！`);
//     }
// });

// チャレンジ問題２
// const setPassword = document.getElementById(`setPassword`);
// setPassword.addEventListener(`click`, function () {
//     const confirmPassword = document.getElementById(`confirmPassword`).value;
//     const newPassword = document.getElementById(`newPassword`).value;
//     if (Passwordvalue === confirmPassword) {
//         if (Passwordvalue !== newPassword) {
//             let result = newPassword.match(/(.)\1{1,}/);
//             if (result) {
//                 alert(`連続文字は使えません。`)
//             }
//             if (8 <= newPassword.length && !result) {
//                 Passwordvalue = newPassword;
//                 nowPassword.textContent = `現在のパスワードは${Passwordvalue}`;
//                 alert(`新しいパスワードは${Passwordvalue}です`);
//             } else {
//                 alert(`8文字以上で入力してください。`);
//             }
//         } else {
//             alert(`古いパスワードは使えません！`)
//         }
//     } else {
//         alert(`古いパスワードが間違っています！`);
//     }
// });

// チャレンジ問題３

const setPassword = document.getElementById(`setPassword`);
setPassword.addEventListener(`click`, function () {
    const confirmPassword = document.getElementById(`confirmPassword`).value;
    const newPassword = document.getElementById(`newPassword`).value;
    if (Passwordvalue === confirmPassword) {
        if (Passwordvalue !== newPassword) {
            let result = newPassword.match(/^abc/);
            if (result) {
                alert(`連番は使えません。`)
            }
            if (8 <= newPassword.length && !result) {
                Passwordvalue = newPassword;
                nowPassword.textContent = `現在のパスワードは${Passwordvalue}`;
                alert(`新しいパスワードは${Passwordvalue}です`);
            } else {
                alert(`8文字以上で入力してください。`);
            }
        } else {
            alert(`古いパスワードは使えません！`)
        }
    } else {
        alert(`古いパスワードが間違っています！`);
    }
});