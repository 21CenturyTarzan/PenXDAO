import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_APP } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (pathname === PATH_APP.mail.root) {
      push(PATH_APP.mail.all);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
