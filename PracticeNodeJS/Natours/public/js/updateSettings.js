import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async function (data, type) {
  //   const updateData = {
  //     name,
  //     email,
  //   };

  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();

    if (resData.status === 'success') {
      showAlert('success', `${type.toUpperCase()} is successfully updated.`);
    }
  } catch (err) {
    showAlert(err.message || 'Something went wrong.');
  }
};
