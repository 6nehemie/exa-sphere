'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { LogOut, Repeat2, Settings, Users, Sparkles } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import toInitials from '@/utils/functions/toInitials';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logoutAction from '@/utils/actions/authentication/logoutAction';
import { useAppSelector } from '@/lib/hooks';

const NavMenu = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  const fullName = `${user.firstName} ${user.lastName}`;
  const initials = toInitials(fullName);

  const handleLogout = async () => {
    //? Implement logout logic here
    const response = await logoutAction();

    if (response && response.error) {
      //? Show a toast message

      console.error(response.error);
      return;
    }

    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer max-lg:size-8">
          <AvatarImage src={user.avatar} alt="@shadcn" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="max-w-72 w-full mx-6 mr-10 z-[120]">
        <DropdownMenuLabel className="text-sm font-light space-y-1 p-2.5">
          <p className="font-normal">
            {user.firstName && user.firstName} {user.lastName && user.lastName}
          </p>
          <p className="text-gray-exa-1">{user.email}</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="px-0">
          <Link href="/">
            <DropdownMenuItem>
              <Sparkles className="mr-3.5 size-5" />
              <span>My Plan</span>
            </DropdownMenuItem>
          </Link>

          <Link href="/settings">
            <DropdownMenuItem>
              <Settings className="mr-3.5 size-5" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-3.5 size-5" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavMenu;
