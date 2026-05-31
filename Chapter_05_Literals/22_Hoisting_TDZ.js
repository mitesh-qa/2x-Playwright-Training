{
  // TDZ starts

  console.log(b); // ❌ Error

  let b = 20;

  // TDZ ends
}

/*
Temporal Dead Zone (TDZ)

The TDZ is the time between:

entering the scope
and the variable declaration line

During this time:

variable exists
but cannot be accessed
*/