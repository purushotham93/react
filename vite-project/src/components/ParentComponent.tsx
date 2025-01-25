import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <ChildComponent
        initialValue={0}
        updateParentValue={(value) => {
          console.log(value);
        }}  
       />
    </div>
  );
}

export default ParentComponent;