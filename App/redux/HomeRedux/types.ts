export type UsersRequestPayload = {
    pageParam?: number;
    per_page?: number;
  };
  
export type UsersSuccessPayload = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data?: User[] | null;
    support: Support;
  };

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  
export type Support = {
    url: string;
    text: string;
  };
  