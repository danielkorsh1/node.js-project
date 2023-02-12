const baseUrl = "/api/data";

async function getData() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error(error);
  }
}

async function addData(data) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (response.ok) {
      console.log(responseData);
      getData();
    } else {
      console.error(responseData.message);
    }
  } catch (error) {
    console.error(error);
  }
}

async function updateData(id, data) {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (response.ok) {
      console.log(responseData);
      getData();
    } else {
      console.error(responseData.message);
    }
  } catch (error) {
    console.error(error);
  }
}

async function deleteData(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    const responseData = await response.json();
    if (response.ok) {
      console.log(responseData);
      getData();
    } else {
      console.error(responseData.message);
    }
  } catch (error) {
    console.error(error);
  }
}