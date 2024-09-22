import { useState } from 'react';

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </label>
      <p>현재 상태: {isChecked ? '선택됨' : '선택안됨'}</p>
    </div>
  );
}
