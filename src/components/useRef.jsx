import { useState, useEffect, useRef } from "react";
 const Useref=()=> {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
    <h1>use Ref</h1>
    <p>The useRef Hook allows you to persist values between renders. <br />

It can be used to store a mutable value that does not cause a re-render when updated. <br />

It can be used to access a DOM element directly.</p>
<p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. <br />

To avoid this, we can use the useRef Hook.</p>
<p>useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).</p>
<p>It's like doing this: const count = current: 0. We can access the count by using count.current.</p>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
      />
      <h1> input content Count: {count.current}</h1>
    </>
  );
}

export default Useref;