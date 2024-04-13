'use client';

import { usePathname } from 'next/navigation';
import { settingsNavigation } from '../../constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/hooks';

const SettingsNavigation = () => {
  const pathname = usePathname();
  const user = useAppSelector((state) => state.user);

  return (
    <div className="relative">
      <div className="lg:sticky top-[140px] w-full max-lg:pb-10 lg:pr-10">
        <div className="space-y-12 lg:max-w-[284px] w-full">
          <div className="max-lg:hidden space-y-2">
            <h1 className="text-2xl font-light">Account</h1>
            <p className="text-sm font-light text-gray-1">
              Manage your account info.
            </p>
          </div>

          <div className=" max-lg:flex items-center gap-4 lg:space-y-2">
            {settingsNavigation.map((link) => {
              const isActive = pathname == link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'block font-light text-sm py-1.5 px-2.5 rounded-sm hover:bg-gray-2 transition-colors duration-200 ease-in-out',
                    {
                      'bg-gray-2': isActive,
                      hidden:
                        user.authType === 'OAUTH' && link.label === 'Security',
                    }
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsNavigation;
