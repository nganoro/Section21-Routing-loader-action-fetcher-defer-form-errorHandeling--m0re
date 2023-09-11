import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  /** allows you to execute an action or loader without having 
   * to be navigated away from your current page to where the 
   * loader or action is stored, like sending request behind the scenes*/
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message){
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;