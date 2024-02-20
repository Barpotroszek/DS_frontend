window.onload = () => {
  try {
  const topic = document.getElementsByClassName("topic")[0].textContent;
    const title =  document.getElementsByTagName("title")[0] 
    title.textContent = topic + " | " + title.textContent;
    console.log({title, topic})
  } catch (e) {}
};
