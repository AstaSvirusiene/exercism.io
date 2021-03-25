export function twoFer(name)
{
   return (name === undefined) ? "One for you, one for me."
   : "One for " + name + ", one for me.";
};


/*import { twoFer } from './two-fer';

describe('twoFer()', () => {
  test('no name given', () => {
    expect(twoFer()).toEqual('One for you, one for me.');
  });

  test('a name given', () => {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  test('another name given', () => {
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.');
  });
});

This function can be improved further with these things.

1/ You can have a read about default parameter in JavaScript and apply in twoFer method.

2/ You can have a read about template literals in Javascript. We shouldn't repeat the string twice, 
there is one thing we need to replace is name variable. So we only need to figure out what is the correct 
value of name and pass it into the string we have. */
