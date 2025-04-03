import { pgEnum } from 'drizzle-orm/pg-core';
import * as E from '@/enums';

function createPgEnum<T extends string>(enumName: string, obj: Record<string, T>) {
  return pgEnum(enumName, Object.values(obj) as [T, ...T[]]);
}

export const _FolderState = createPgEnum('_folder_state', E.FolderState);
export const _JobState = createPgEnum('_job_state', E.JobState);
export const _PaymentMethodState = createPgEnum('_payment_method_state', E.PaymentMethodState);
export const _PostState = createPgEnum('_post_state', E.PostState);
export const _PostVisibility = createPgEnum('_post_visibility', E.PostVisibility);
export const _PreorderPaymentState = createPgEnum('_preorder_payment_state', E.PreorderPaymentState);
export const _SiteState = createPgEnum('_site_state', E.SiteState);
export const _SingleSignOnProvider = createPgEnum('_single_sign_on_provider', E.SingleSignOnProvider);
export const _UserState = createPgEnum('_user_state', E.UserState);
