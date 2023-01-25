'use client'

import {Grid, Text, Row} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import LinkIcon from "../icons/Link";

import {FeatureItem} from "./styles";

const FeaturesGrid = ({
  features,
  xs,
  sm,
  lg,
  css,

  itemCss,
  ...props
}) => {
  const router = useRouter();
  const handleClick = (feat) => {
    if (!feat.href) {
      return;
    }

    if (feat.isExternal) {
      window.open(feat.href, "_blank");

      return;
    }
    router.push(feat.href);
  };

  return (
    <Grid.Container css={{px: 0, ...css}} gap={2} {...props}>
      {features.map((feat, index) => (
        <Grid key={`${feat.title}_${index}`} xs={12} md={4} lg={3}>
          <FeatureItem clickable={!!feat.href} css={itemCss} onClick={() => handleClick(feat)}>
            <Row align="center">
              <div className="icon-wrapper">{feat.icon}</div>
              <Text
                className="feature-title"
                css={{
                  my: 0,
                  fontSize: "1.1rem",
                  fontWeight: "$semibold",
                  ml: "$4",
                }}
              >
                {feat.title}
              </Text>
              {feat.isExternal && (
                <LinkIcon
                  css={{
                    ml: "$4",
                  }}
                  fill="var(--nextui-colors-accents7)"
                  size={18}
                />
              )}
            </Row>
            <Row align="center" css={{px: "$2", pt: "$4", pb: "$2"}}>
              <Text className="feature-description" css={{color: "$accents8"}}>
                {feat.description}
              </Text>
            </Row>
          </FeatureItem>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FeaturesGrid