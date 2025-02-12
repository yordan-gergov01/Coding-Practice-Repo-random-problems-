import { showAlert } from './alerts';

export const updateData = async function (name, email) {
  const data = {
    name,
    email,
  };

  try {
    const res = await fetch('http://127.0.0.1:3000/api/v1/users/updateMe', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();

    if (resData.status === 'success') {
      showAlert('success', 'Data is successfully updated.');
    }
  } catch (err) {
    showAlert(err.message || 'Something went wrong.');
  }
};
