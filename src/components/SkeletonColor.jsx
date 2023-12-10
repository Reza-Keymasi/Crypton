import { Skeleton, Box as BoxMUI } from "@mui/material";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Skeleton as SkeletonJoy,
  AspectRatio,
  Box,
} from "@mui/joy";

export default function SkeletonColor({
  isMarket,
  isCoins,
  isHome,
  isMarketsTable,
  isNews,
  isCoinDetails,
}) {
  return (
    <>
      {isMarket && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={100}
          sx={{ borderRadius: 1, bgcolor: "grey.400" }}
          type="false"
        />
      )}

      {isCoins && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={180}
          sx={{ borderRadius: 1, bgcolor: "grey.400" }}
          type="false"
        />
      )}
      {isHome && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={180}
          sx={{ borderRadius: 1, bgcolor: "grey.400" }}
          type="false"
        />
      )}

      {isNews && (
        <>
          <Card
            variant="outlined"
            sx={{ width: "100%", height: { lg: "582px" } }}
          >
            <CardContent orientation="horizontal" pt="32px" pl="32px">
              <SkeletonJoy
                animation="wave"
                variant="circular"
                width={48}
                height={48}
              />
              <div>
                <SkeletonJoy
                  animation="wave"
                  variant="text"
                  sx={{ width: 120 }}
                />
                <SkeletonJoy
                  animation="wave"
                  variant="text"
                  level="body-sm"
                  sx={{ width: 200 }}
                />
              </div>
            </CardContent>
            <AspectRatio ratio="21/9">
              <SkeletonJoy animation="wave" variant="overlay">
                <img
                  alt=""
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                />
              </SkeletonJoy>
            </AspectRatio>
            <Typography sx={{ overflow: "hidden" }}>
              <SkeletonJoy animation="wave">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries.
              </SkeletonJoy>
            </Typography>
            <Button>
              Read more
              <SkeletonJoy animation="wave" />
            </Button>
          </Card>
        </>
      )}

      {isMarketsTable && (
        <BoxMUI sx={{ width: "100%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </BoxMUI>
      )}
      {isCoinDetails && (
        <>
          <Card
            variant="outlined"
            sx={{ width: "100%", height: { lg: "582px" } }}
          >
            <CardContent orientation="horizontal" pt="32px" pl="32px">
              <div>
                <SkeletonJoy
                  animation="wave"
                  variant="text"
                  sx={{ width: 120 }}
                />
                <SkeletonJoy
                  animation="wave"
                  variant="text"
                  level="body-sm"
                  sx={{ width: 200 }}
                />
              </div>
            </CardContent>
            <AspectRatio ratio="21/9">
              <SkeletonJoy animation="wave" variant="overlay">
                <img
                  alt=""
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                />
              </SkeletonJoy>
            </AspectRatio>
            <Typography sx={{ overflow: "hidden" }}>
              <SkeletonJoy animation="wave">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries.
              </SkeletonJoy>
            </Typography>
            <Button>
              Read more
              <SkeletonJoy animation="wave" />
            </Button>
          </Card>
        </>
      )}
    </>
  );
}
