import { Pagination, Stack } from "@mui/material";
// to be continued
export function PaginationList() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="secondary" />
    </Stack>
  );
}
