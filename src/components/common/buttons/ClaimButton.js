// @flow
import React from 'react'
import { PushButton } from '../../appNavigation/PushButton'
import { withStyles } from '../../../lib/styles'
import Text from '../view/Text'

const ClaimButton = ({ screenProps, styles }) => (
  <PushButton routeName="Claim" screenProps={screenProps} style={styles.claimButton}>
    <Text color="surface" textTransform="uppercase" fontWeight="medium">
      Claim
    </Text>
  </PushButton>
)

const getStylesFromProps = ({ theme }) => ({
  claimButton: {
    animationKeyframes: 'zoom-in-out',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationDelay: '1s',
    animationIterationCount: 3,
    animationDirection: 'normal',
    alignItems: 'center',
    backgroundColor: theme.colors.green,
    borderColor: theme.colors.surface,
    borderRadius: '50%',
    borderWidth: 3,
    height: 72,
    left: '50%',
    marginHorizontal: 0,
    elevation: 0,
    padding: 3,
    position: 'absolute',
    top: '50%',
    width: 72,
    zIndex: 99,
    transform: [
      {
        translateX: '-50%',
      },
      {
        translateY: '-50%',
      },
    ],
  },
})

export default withStyles(getStylesFromProps)(ClaimButton)
